import { handleRequest,eventTrigger } from './handler'

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest())
})

addEventListener("scheduled", event => {
  event.waitUntil(eventTrigger())
})