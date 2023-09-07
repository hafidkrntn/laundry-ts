import axios from 'axios';
import React, {useEffect, useState} from 'react';

interface Data {
  _id: number;
  nama: string;
  alamat: string;
  handphone: string;
}

const Customer: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetchData()
  },[]);

  const fetchData = async () => {
    try {
      const res = await axios.get<Data[]>('https://laundryporis.vercel.app/api/users/users');
      setData(res.data);
    } catch (error) {
      console.error('Error Fetching Data', error);
    }
  }

  return (
    <div>
      Customer
    <ul>
      {data.map((item) => (
        <li key={item._id}>{item.nama}</li>
      ))}
    </ul>  
    </div>
  )
}

export default Customer