export default function Tabs ({ children, ButtonContainer = 'menu', buttons }) {
    return ( 
        <>
            <ButtonContainer>
                { buttons }
            </ButtonContainer>
            { children }
        </>
    )
    
}