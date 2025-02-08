import { TestBed } from '@angular/core/testing';

import { LoxParserService } from './lox-parser.service';

describe('LoxParserService', () => {
    let service: LoxParserService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LoxParserService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
