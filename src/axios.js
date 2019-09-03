import axios from 'axios';

export default function() {
  const instance = axios.create({
    headers: {
      Authorization: 'Bearer BQAwKnyEZsJuXzxNAVOqD0a9LKU_71I2TQvsrRdhKn75vgws-9qCLQMB0gViWM4aaaaExNvz3WB7U_yuymY'
    }
  });

  return instance;
}
