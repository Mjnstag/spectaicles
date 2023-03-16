from flask import Flask, render_template

# Create the application.
app = Flask(__name__)

app.config['TEMPLATES_AUTO_RELOAD'] = True

# A simple page that says hello
@app.route("/")
def hello():
    return """Hello World!
    <br><a href="/webcam">Webcam</a>
    <br><a href="/face_rec">face_rec</a>"""


@app.route("/webcam")
def webcam():
    return render_template("webcam_py.html")


@app.route("/face_rec")
def face_rec():
    return render_template("face_rec.html")
