import RichTextEditor from '../../components/RichText';

import { useCallback, useState } from 'react';
import { Button } from '@mantine/core';
import { storage } from '../../lib/firebase';

const  handleImageUpload = useCallback(


    (file:File): Promise<string> =>
      new Promise((resolve, reject) => {
  
        var postImage = storage.child('images/post.jpg');
  
        const formData = new FormData();
        formData.append('image', file);
  
        //postImage.put(file).then((result)=> console.log(result)).then((Response)=> resolve(Response))
        
        fetch('https://api.imgbb.com/1/upload?key=api_key', {
          method: 'POST',
          body: formData,
        })
          .then((response) => response.json())
          .then((result) => resolve(result.data.url))
          .catch(() => reject(new Error('Upload failed')));
       }
      ),
    []
  );
  

export default function Admin() {
    const initialValue = '<h1>hello,</h1><p>my name is <em>anan </em><strong><em>saadi</em></strong></p>';
    const [value, onChange] = useState(initialValue);


    return (
        <>
            <RichTextEditor value={value} onChange={onChange} />
            <Button onClick={() => console.log(value)} />
        </>

    );

}





