from flask import Flask
import socketio
# from wsgi import app
  # a Flask, Django, etc. application
appF = Flask(__name__)

# create a Socket.IO server
sio = socketio.Server()

app = socketio.WSGIApp(sio, appF)


@sio.event
def connect(sid, environ):
    print('connect ', sid)

@sio.event
async def chat_message(sid, data):
    print("message ", data)
    await sio.emit('reply', room=sid)

@sio.event
def disconnect(sid):
    print('disconnect ', sid)