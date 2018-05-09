import { TestBed, inject } from '@angular/core/testing';

import { TextToImgService } from './text-to-img.service';

describe('TextToImgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextToImgService]
    });
  });

  it('should be created', inject([TextToImgService], (service: TextToImgService) => {
    expect(service).toBeTruthy();
  }));
});
