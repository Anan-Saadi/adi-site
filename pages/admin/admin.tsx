import RichTextEditor from '../../components/RichText';

import Quill from 'quill';
import ImageResize from 'quill-image-resize-module';



import { Container, Space, Stack, TextInput } from '@mantine/core';

import { useCallback, useMemo, useState } from 'react';
import { Button } from '@mantine/core';
import { storage, uploadPost } from '../../lib/firebase';




export default function Admin() {

  const modules = useMemo(
    () => ({
      ImageResize: {
        // ...
        
    }
    }),
    []
  );
  const handleImageUpload = useCallback(


    (file: File): Promise<string> =>
      new Promise((resolve, reject) => {

        var postImage = storage.child('images/post.jpg');

        const formData = new FormData();
        formData.append('image', file);

        postImage.put(file)
          .then((result) =>
            (result.ref.getDownloadURL().then((x) => resolve(x))))
          .then((Response) => console.log(Response))
          .catch((e) => console.log(e))


      }
      ),
    []
  );
  const initialValue = '';
  const [value, onChange] = useState(initialValue);
  const [title, setValue] = useState('');



  return (
    <Stack>
      <Space h={10} />
      <Container>
        <TextInput
          value={title}
          onChange={
            (event) => setValue(event.currentTarget.value)
          }
          placeholder="Title"
          label="Title"
          withAsterisk
        />
      </Container>
      <RichTextEditor value={value} onChange={onChange} onImageUpload={handleImageUpload}/>


      <Container>
        <Button onClick={()=>uploadPost(title, value)} >click me</Button>
      </Container>

    </Stack>

  );

}





