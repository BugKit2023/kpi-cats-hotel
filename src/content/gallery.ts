import catWhiskers from '../assets/cat-whiskers.jpg';
import catLuna from '../assets/cat-luna.jpg';
import catGizmo from '../assets/cat-gizmo.jpg';
import catMaffin from '../assets/cat-maffin.jpg';
import catOlivia from '../assets/cat-olivia.jpg';
import catShadow from '../assets/cat-shadow.jpg';
import catJasper from '../assets/cat-jasper.jpg';

export interface CatImage {
    src: string,
    alt: string,
    name: string
}

export const gallery: CatImage[] = [
    { src: catWhiskers, alt: 'Whiskers', name: 'Whiskers'},
    { src: catLuna, alt: 'Luna', name: 'Luna'},
    { src: catGizmo, alt: 'Gizmo', name: 'Gizmo'},
    { src: catMaffin, alt: 'Maffin', name: 'Maffin'},
    { src: catOlivia, alt: 'Olivia', name: 'Olivia'},
    { src: catShadow, alt: 'Shadow', name: 'Shadow'},
    { src: catJasper, alt: 'Jasper', name: 'Jasper'}
]