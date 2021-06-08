import React from 'react'
import { Button } from 'react-bootstrap'
import { t } from 'react-switch-lang'
import { useHistory } from 'react-router-dom'

const Forbidden = () => {
    const history = useHistory();
    return (
        <div>
            {t('forbidden.goBack')}
            <Button onClick={() => history.push('/')} variant="success">{t('forbidden.login')}</Button>
        </div>
    )
}
export default Forbidden;