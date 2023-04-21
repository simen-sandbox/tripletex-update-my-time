import { TripletexClient } from 'tripletexjs';
import { TypicalHttpError } from 'typical-fetch';

const consumerToken =
  'eyJ0b2tlbklkIjoyMDMyLCJ0b2tlbiI6InRlc3QtOWM1MDkyNmEtZDlkMy00YThlLTk3Y2EtZjBhMDU3YzBjNjc5In0=';
const employeeToken =
  'eyJ0b2tlbklkIjozMzE2LCJ0b2tlbiI6InRlc3QtZmEyOTNlNDktZmM0NC00NTI1LWIwOGQtOTJjOTcwY2NmOTYzIn0=';

const client = new TripletexClient({
  baseUrl: 'https://api.tripletex.io/',
  consumerToken,
  employeeToken,
});

const projectId = 1603104;
const activityId = 46419;
const employeeId = 1737100;
const { success, error } = await client.timesheet().addEntry({
  projectId,
  activityId,
  employeeId,
  date: new Date('2022-09-02'),
  hours: 4,
  comment: 'hello world',
});

if (success) {
  console.log('Entry added');
} else {
  if (error instanceof TypicalHttpError) {
    console.log({
      body: await error.res.text(),
      request: error.req,
    });
  }
  throw error;
}