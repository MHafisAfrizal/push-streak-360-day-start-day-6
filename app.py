from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/services.json')
def services():
    return send_from_directory('static', 'services.json')

if __name__ == '__main__':
    app.run(debug=True)
