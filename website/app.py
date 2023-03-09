from flask import Flask, render_template

# Create the application.
app = Flask(__name__)

# A simple page that says hello
@app.route("/")
def hello():
    return "Hello World!"


@app.route("/webcam")
def webcam():
    return render_template("webcam.html")
