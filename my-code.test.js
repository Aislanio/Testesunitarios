const{somar} = require('./my-code')
const{inOneHour} = require('./my-code')


describe("math functions", () =>{
    

    it('somar 2 numbers', () =>{
        expect(somar(1,2)).toBe(3)
    })
    it('somar 2 numbers', () =>{
        expect(somar(1,2)).toBe(3)
    })
})



describe("Time functions", () =>{
    

    it('Returns the timestamp for one hour ahead', () =>{
        const realDatenow =  Date.now.bind(global.Date)
        global.Date.now = jest.fn(() => 0)
        expect(inOneHour()).toBe(3600000);
        global.Date.now = realDatenow;
    });
    
})
/*
beforeAll(()=>{
        console.log('before all')
    })

    beforeEach(() =>{
        console.log('Befores each')
    })

    afterAll(() =>{
        console.log('after all')
    })

    afterEach(()=>{
        console.log('after Each')
    })


*/