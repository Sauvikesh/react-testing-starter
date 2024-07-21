import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'

describe('Product Image Gallery', () => {
    it('should display null when there are no image urls', () => {
        const { container } = render(<ProductImageGallery imageUrls={[]} />);

        expect(container).toBeEmptyDOMElement();
    });

    it('should display images in a list', () => {
        const imageURLs = ['url1', 'url2'];

        render(<ProductImageGallery imageUrls={imageURLs} />);

        const images = screen.getAllByRole('img'); // this gets all the images on the page -> helpful for counting how many images are displayed
        expect(images).toHaveLength(2);

        imageURLs.forEach((url, index) => {
            expect(images[index]).toHaveAttribute('src', url); // lets us check the url in each image and confirm its right
        });
    });
})