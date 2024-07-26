import styled, { css } from 'styled-components';

export const RecipeView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`;

export const Title = styled.h2`
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0;
`;

export const Author = styled.p`
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
`;
