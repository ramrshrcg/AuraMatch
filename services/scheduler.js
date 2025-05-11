import cron from 'node-cron';
import Glass from '../model/glassModel.js';
import axios from 'axios';

// Every 14 minutes
const schedule= cron.schedule('*/14 * * * *', async () => {
  console.log('Running DB job every 14 minutes');

  try {
    
    const result = await Glass.find();
    const webiste= axios.get("https://auramatch.onrender.com")

    console.log('DB hit success:',webiste);
  } catch (err) {
    console.error('Error hitting DB:', err);
  }
});
export default schedule
