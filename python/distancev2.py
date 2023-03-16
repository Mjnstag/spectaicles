import numpy as np
import imutils
import cv2
import matplotlib.pyplot as plt


def find_stickynote(image):
    # convert the image to grayscale, blur it, and detect edges
    gray = cv2.cvtColor(image, 0)
    gray = cv2.GaussianBlur(gray, (5, 5), 0)
    edged = cv2.Canny(gray, 35, 125)

    cnts = cv2.findContours(edged.copy(), cv2.RETR_LIST,
                            cv2.CHAIN_APPROX_SIMPLE)
    cnts = imutils.grab_contours(cnts)
    c = max(cnts, key=cv2.contourArea)
    M = cv2.moments(c)

    cv2.imshow("Gray", edged)
    # compute the bounding box of the of the note region and return it
    return (cv2.minAreaRect(c))


def distance_to_camera(known_width, focal_length, per_width):
    # compute and return the distance from the object to the camera
    return (known_width * focal_length) / per_width


KNOWN_DISTANCE = 20
KNOWN_WIDTH = 16  # cm


# initialize the video capture object using the default camera
cap = cv2.VideoCapture(0)
rescale = False
# loop over frames from the video stream
while True:
    # read a frame from the video stream
    ret, frame = cap.read()

    if rescale:
        scale_percent = 60  # percent of original size
        width = int(frame.shape[1] * scale_percent / 100)
        height = int(frame.shape[0] * scale_percent / 100)
        dim = (width, height)

        frame = cv2.resize(frame, dim)

    # find the sticky note and its center in the frame
    sticky_note = find_stickynote(frame)

    # compute the distance to the object using the calibrated camera parameters
    # dist = distance_to_camera(KNOWN_WIDTH, focal_length, sticky_note[1][0])
    dist = distance_to_camera(KNOWN_WIDTH, 600, sticky_note[1][0])

    # draw a bounding box and display the distance on the frame
    box = cv2.cv.BoxPoints(sticky_note) if imutils.is_cv2(
    ) else cv2.boxPoints(sticky_note)
    box = np.int0(box)
    w, h = sticky_note[1]

    ratio = float(w)/h
    if ratio >= 0.8 and ratio <= 1.2 and w > 20 and h > 20:
        cv2.drawContours(frame, [box], -1, (0, 255, 0), 2)
        cv2.putText(frame, "Distance: " + str(round((KNOWN_WIDTH*600/dist), ndigits=2)) + " cm",
                    (0, 25), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 1)

    # show the frame
    cv2.imshow("Frame", frame)

    key = cv2.waitKey(1)
    if key == ord("q"):
        break

cap.release()
cv2.destroyAllWindows()
