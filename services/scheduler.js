import cron from 'node-cron';
import Glass from '../model/glassModel.js';
import axios from 'axios';

// Every 14 minutes
const schedule= cron.schedule('*/14 * * * *', async () => {
  console.log('Running DB job every 14 minutes');

  try {
    
    const result = await Glass.find();
    const webiste=  await axios.get("https://auramatch.onrender.com")

    console.log('hit success:',webiste.status);
  } catch (err) {
    console.error('Error hitting DB:', err);
  }
});
export default schedule
