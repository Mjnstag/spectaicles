
import numpy as np
import imutils
import cv2
import matplotlib.pyplot as plt

def find_stickynote(image):
    # convert the image to grayscale, blur it, and detect edges
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    gray = cv2.GaussianBlur(gray, (5, 5), 0)
    edged = cv2.Canny(gray, 35, 125)

    cnts = cv2.findContours(edged.copy(), cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)
    cnts = imutils.grab_contours(cnts)
    c = max(cnts, key = cv2.contourArea)
    M = cv2.moments(c)
    # compute the bounding box of the of the note region and return it
    return cv2.minAreaRect(c), [int(M["m10"] / M["m00"]),int(M["m01"] / M["m00"])]

def distance_to_camera(known_width, focal_length, per_width):
    # compute and return the distance from the object to the camera
    return (known_width * focal_length) / per_width

KNOWN_DISTANCE = 20
KNOWN_WIDTH = 8 # cm

# load the reference image and find the reference object in the image
ref_image = cv2.imread("rect.jpg")
ref_obj, ref_center = find_stickynote(ref_image)
ref_width = ref_obj[1][0]

# compute the focal length using the known distance and width of the reference object
focal_length = (ref_width * KNOWN_DISTANCE) / KNOWN_WIDTH

# initialize the video capture object using the default camera
cap = cv2.VideoCapture(0)

# loop over frames from the video stream
while True:
    # read a frame from the video stream
    ret, frame = cap.read()

    # find the sticky note and its center in the frame
    sticky_note, centre = find_stickynote(frame)

    # compute the distance to the object using the calibrated camera parameters
    dist = distance_to_camera(KNOWN_WIDTH, focal_length, sticky_note[1][0])

    # draw a bounding box and display the distance on the frame
    box = cv2.cv.BoxPoints(sticky_note) if imutils.is_cv2() else cv2.boxPoints(sticky_note)
    box = np.int0(box)
    cv2.drawContours(frame, [box], -1, (0, 255, 0), 2)
    cv2.putText(frame, "{:.2f}cm".format(dist), (int(centre[0]), int(centre[1])),
            cv2.FONT_HERSHEY_SIMPLEX, 1.0, (0, 0, 0), 2)


    # show the frame
    cv2.imshow("Frame", frame)

    key = cv2.waitKey(1) & 0xFF
    if key == ord("q"):
        break

cap.release()
cv2.destroyAllWindows()
