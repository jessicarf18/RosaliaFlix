import styled from 'styled-components';
import Button from '../Button';
import Logo from '../Logo';
const Header = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    background-color: var(--color-black-dark);
    border-bottom: 2px solid var(--color-primary-medium);

    @media(max-width:800px){
        justify-content: center;
        padding: 15px 16px;

        & > ${Logo}{
            height: 35px;
        }
        & > ${Button} {
            background-color: var(--color-primary-medium);
            border-radius: 0;
            border: 0;
            position: fixed;
            bottom:0;
            left:0;
            width:100vw;
        }
    }
`;

export default Header;