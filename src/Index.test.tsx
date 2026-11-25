import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '__mocks__/matchMedia';
import App from 'App/App';

describe('academic website',()=>{
  beforeEach(()=>{window.location.hash='';localStorage.clear();});
  it('shows academic title and profile links on the home page',()=>{
    render(<App/>);
    expect(screen.getByText('Bruno Perillo')).toBeInTheDocument();
    expect(screen.getByText('Professor da UFCIMG | Data Scientist')).toBeInTheDocument();
    expect(screen.queryByText('Cidadão da União Europeia')).not.toBeInTheDocument();
    expect(screen.getByRole('link',{name:'GitHub'})).toHaveAttribute('href','https://github.com/brunoperillo/');
    expect(screen.getByRole('link',{name:'Lattes'})).toHaveAttribute('href','http://lattes.cnpq.br/0921878747570094');
  });
  it('switches to English',()=>{
    render(<App/>);
    fireEvent.click(screen.getByRole('button',{name:'EN'}));
    expect(screen.getByText('Professor at UFCIMG | Data Scientist')).toBeInTheDocument();
    expect(localStorage.getItem('language')).toBe('en');
  });
  it('displays all citizenships in About in English',()=>{
    render(<App/>);
    fireEvent.click(screen.getByRole('button',{name:'EN'}));
    fireEvent.click(screen.getByRole('button',{name:'About'}));
    expect(screen.getByText('Brazilian · Italian · Spanish · Portuguese')).toBeInTheDocument();
  });
  it('has teaching navigation',()=>{
    render(<App/>);
    fireEvent.click(screen.getByRole('button',{name:'Ensino'}));
    expect(window.location.hash).toBe('#ensino');
    expect(screen.getByText('Disciplinas teóricas')).toBeInTheDocument();
    expect(screen.getByText('Aulas práticas e laboratórios')).toBeInTheDocument();
    expect(screen.getByText('Laboratório de Computação em Nuvem')).toBeInTheDocument();
    expect(screen.getByText('Laboratório de Mineração de Dados')).toBeInTheDocument();
    expect(screen.getByText('Laboratório de Ciência de Dados')).toBeInTheDocument();
  });
});
