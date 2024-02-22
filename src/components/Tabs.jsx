export default function Tabs ({ children, buttonContainer, buttons }) {
    const ButtonContainer = buttonContainer; 
    return ( 
        <>
            <ButtonContainer>
                { buttons }
            </ButtonContainer>
            { children }
        </>
    )
    
}