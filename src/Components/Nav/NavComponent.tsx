import Tabs from '@mui/material/Tabs';
import LinkTab from '@mui/material/Tab';
import { useState } from 'react';

export default function NavComponent() {

    const [value, setValue] = useState(0);
    

    return (
        <Tabs
            value={value}
            aria-label="nav tabs example"
            role="navigation"
        >
            <LinkTab label="Page One" href="/search" />
            <LinkTab label="Page Two" href="/favorite" />
        </Tabs>
    )

}