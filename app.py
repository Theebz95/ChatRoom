from flask import Flask
app = Flask(__name__)

# create a Socket.IO server
sio = socketio.Server()

# wrap with a WSGI application
sio.attach(app)

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