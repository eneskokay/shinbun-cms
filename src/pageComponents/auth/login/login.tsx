import {Box, TextField} from "@mui/material";
import styles from "./login.module.css";
import InputComp from "@/components/inputComp";
import {useTranslation} from "react-i18next";

function Login() {
const {t} = useTranslation('common');

    return (
        <Box className={styles.mainCont} boxShadow={5} >
            <InputComp inputName={t('login')} />
        </Box>
    );
}

export default Login;