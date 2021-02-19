import { storeToken } from '../service';

const ChangeToken = (data) => {
    data ? storeToken(data) : null;
    return {
      type: 'CHAGE/TOKEN',
      data: data
    }
} 

export default ChangeToken;