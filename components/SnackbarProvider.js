import React, { useCallback, useContext, useState } from 'react';
import { Snackbar } from 'react-native-paper';

const SnackbarContext = React.createContext();

export function useSnackbar() {

    return useContext(SnackbarContext);
}
export default function SnackbarProvider(props) {

    const [visible, setVisible] = useState(false);
    const [action, setAction] = useState();
    const [message, setMessage] = useState('');

    const onDismissSnackBar = () => setVisible(false);

    const showSnackbar = useCallback(({ message, action }) => {

        setMessage(message);
        setAction(action);
        setVisible(true);

    }, [])
    return <SnackbarContext.Provider value={{ showSnackbar }}>
        {props.children}
        <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            action={action}
            duration={props.duration}
        >
            {message}

        </Snackbar>
    </SnackbarContext.Provider>
}