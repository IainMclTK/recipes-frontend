import styled from 'styled-components';

export const LoginView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 90%;
    margin: 0 auto;
`;

export const Button = styled.button`
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    background-color: #3f51b5;
    color: white;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #303f9f;
    }
`;

export const Input = styled.input`
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
`;


export const Title = styled.h2`
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0;
`;
