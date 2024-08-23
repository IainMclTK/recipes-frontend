import styled from 'styled-components';

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
