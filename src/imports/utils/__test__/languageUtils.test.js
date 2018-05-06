import * as tools from '../languageUtils';
import { LoginText } from '../../Text';


describe('Testing language utils', () => {
    it('should checking correct to translate language', () => {
        const textTH = tools.checkLanguage('th', LoginText);
        const textEN = tools.checkLanguage('en', LoginText);
        
        expect(textTH.submit).toBe('เข้าสู่ระบบ');
        expect(textEN.submit).toBe('Submit');
    })
});