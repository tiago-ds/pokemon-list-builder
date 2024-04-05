import Tabs from '@mui/material/Tabs';
import LinkTab from '@mui/material/Tab';
import React from 'react';

export default function NavComponent() {

    const [value, setValue] = React.useState("");

    function samePageLinkNavigation(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        if (
            event.defaultPrevented ||
            event.button !== 0 || // ignore everything but left-click
            event.metaKey ||
            event.ctrlKey ||
            event.altKey ||
            event.shiftKey
        ) {
            return false;
        }
        return true;
    }

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        // event.type can be equal to focus with selectionFollowsFocus.
        if (
            event.type !== "click" ||
            (event.type === "click" &&
                samePageLinkNavigation(
                    event as React.MouseEvent<HTMLAnchorElement, MouseEvent>,
                )
            )
        ) {
            setValue(newValue);
        }
    };

    return (
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <LinkTab href="/search" value="search" label="Search" />
                <LinkTab href="/favorite" value="favorite" label="Favorites" />
            </Tabs>
        </div>
    );
}