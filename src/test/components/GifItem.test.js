import { render,screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";


describe('Prueba en el componente <GifItem/>', () => {
    const tittle ='Saitama';
    const url ='https://google.com/'

    test('Debe de hacer match con el snapshot', () => {




    const {container} = render(<GifItem title={tittle} url={url}/>);
    expect(container).toMatchSnapshot();

    })


    test('Debe de salir error sy no recibe el titulo y url', () => {

        render(<GifItem title={tittle} url={url}/>);
       expect(screen.getByRole('img').src).toBe(url+'ss');


     })
 })