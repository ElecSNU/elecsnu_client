import { useEffect, useState } from 'react';
import { useStoreActions } from 'easy-peasy';

const useLoader = () => {
    const showLoaderAction = useStoreActions(
        (actions) => actions.loaderModel.show_loader
    );
    const hideLoaderAction = useStoreActions(
        (actions) => actions.loaderModel.hide_loader
    );

    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        showLoader
            ? showLoaderAction()
            : hideLoaderAction();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showLoader]);

    return setShowLoader;
};

export default useLoader;
