//import RichTextEditor from '../../components/RichText';

import RichTextEditor from '@mantine/rte';
import dynamic from 'next/dynamic';
import { useState } from 'react';

export default dynamic(() => import('@mantine/rte'), {
    // Disable during server side rendering
    ssr: false,
  
    // Render anything as fallback on server, e.g. loader or html content without editor
    loading: () => null,
  });

export function Admin() {
    const initialValue = 'sadasdasd';
    const [value, onChange] = useState(initialValue);

    return (
        <RichTextEditor value={"hhhh"} onChange={onChange} id="rte" />
    );

}

