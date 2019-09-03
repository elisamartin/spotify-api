import axios from 'axios';

export default function() {
  const instance = axios.create({
    headers: {
      Authorization: 'Bearer BQBFUWITPC0o9wH201r15LniZf_fZfd0Hl_xTbs3tW_qyX_FJ0Gb5u9Agak7wnqcwAtcse_sXKrPeg4iWyw'
    }
  });

  return instance;
}
