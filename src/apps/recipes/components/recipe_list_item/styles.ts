import styled, { css } from 'styled-components';

export const Button = styled.button`
  border-radius: 4px;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
  background-color: #3f51b5;
  border: none;
  padding: 6px 16px;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-decoration: none;
  transition: background-color 0.2s;
  cursor: pointer;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

  &:hover {
    background-color: #303f9f;
  }

  &:active {
    background-color: #283593;
    box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  }

  &:focus {
    outline: none;
  }
`;

export const RecipeCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 40%), 0px 1px 1px 0px rgb(0 0 0 / 24%), 0px 4px 3px 0px rgb(0 0 0 / 22%);
    width: 400px;
    `;

export const Title = styled.h2`
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0;
    `;
