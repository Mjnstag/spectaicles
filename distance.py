import cv2
import numpy as np

# focal length can be gotten using F = (P x D) / W
# where F is focal length, P is pixel width, D is distance from camera to object in cm, and W is width of object in real world in cm
# formula from: https://pyimagesearch.com/2015/01/19/find-distance-camera-objectmarker-using-python-opencv/
focalLength = 600
object_size = 6.3  # in cm

cap = cv2.VideoCapture(0)
while True:
    _, img = cap.read()
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    ret, thresh = cv2.threshold(gray, 50, 255, 0)
    contours, hierarchy = cv2.findContours(
        thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)

    for cnt in contours:
        x1, y1 = cnt[0][0]
        approx = cv2.approxPolyDP(cnt, 0.01*cv2.arcLength(cnt, True), True)
        if len(approx) == 4:
            x, y, w, h = cv2.boundingRect(cnt)
            ratio = float(w)/h
            if ratio >= 0.7 and ratio <= 1.3 and w > 20 and h > 20:
                img = cv2.drawContours(img, [cnt], -1, (30, 144, 255), 3)

                # calculate distance based on known size of object in cm and focal length
                cv2.putText(img, "Distance: " + str(round((object_size*focalLength/w), ndigits=2)) + " cm",
                            (0, 25), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 1)
            else:
                img = cv2.drawContours(img, [cnt], -1, (0, 0, 255), 3)
    cv2.imshow("Shapes", img)
    key = cv2.waitKey(15)
    # ESC key
    if key == 27:
        break

cv2.destroyAllWindows()
