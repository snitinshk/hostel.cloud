import Button from "@mui/material/Button";

export default function  NorButton({
    type = "button",
    variant = "contained",
    buttonText = "",
    className,
    alt,
    imgPath,
    disabled = false,
    onPress = () => { },
}) {
    return (
        <Button
            type={type}
            variant={variant}
            disabled={disabled}
            className={`btn button-effect ${className}`}
            onClick={onPress}
        >
            {buttonText}
            <img src={imgPath} alt={alt} />
        </Button>
    );
}