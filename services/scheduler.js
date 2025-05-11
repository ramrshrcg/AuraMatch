import cron from 'node-cron';
import Glass from '../model/glassModel.js';

// Every 14 minutes
const schedule= cron.schedule('*/14 * * * *', async () => {
  console.log('Running DB job every 14 minutes');

  try {
    
    const result = await Glass.find();
    // console.log(result);
    console.log('DB hit success:');
  } catch (err) {
    console.error('Error hitting DB:', err);
  }
});
export default schedule
