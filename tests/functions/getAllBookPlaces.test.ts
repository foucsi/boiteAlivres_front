import { getAllBookPlaces } from '@/helpers/functions/getAllBookPlaces';
import { URL_GET_ALL_BOOK_PLACES } from '@/constants/Url';

jest.mock('@/utils/logger', () => ({
    log: {
        info: jest.fn(),
        error: jest.fn(),
    },
}));

describe('getAllBookPlaces', () => {
    const originalFetch = global.fetch;

    beforeEach(() => {
        global.fetch = jest.fn();
    });

    afterEach(() => {
        global.fetch = originalFetch;
    });

    it('should return book places when the fetch is successful', async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ result: true, bookPlaces: ['place1', 'place2'] }),
        });

        const result = await getAllBookPlaces();

        expect(result).toEqual({ success: true, bookPlaces: ['place1', 'place2'] });
        expect(global.fetch).toHaveBeenCalledWith(URL_GET_ALL_BOOK_PLACES);
    });

});