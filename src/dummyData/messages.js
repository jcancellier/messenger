import uuidv4 from 'uuid/v4';

var messages = [
  {
    text: "Hey Bobs What are you doing today?",
    senderId: 0,
    receiverId: 1,
    id: uuidv4()
  },
  {
    text: "Nothing much just chillin at home",
    senderId: 1,
    receiverId: 0,
    id: uuidv4()
  },
  {
    text: "Why??",
    senderId: 1,
    receiverId: 0,
    id: uuidv4()
  },
  {
    text: "Just wondering cuddy...",
    senderId: 0,
    receiverId: 1,
    id: uuidv4()
  },
  {
    text: "true true",
    senderId: 1,
    receiverId: 0,
    id: uuidv4()
  }
];

export default messages.reverse();