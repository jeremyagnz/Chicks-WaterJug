import { TestBed } from '@angular/core/testing';
import { WaterJugLogicService } from './water-jug-logic.service';

describe('WaterJugLogicService', () => {
  let service: WaterJugLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaterJugLogicService]
    });
    service = TestBed.inject(WaterJugLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for solvable scenarios', () => {
    expect(service.isSolvable(3, 5, 4)).toBeTrue();
    expect(service.isSolvable(2, 6, 4)).toBeTrue();
    expect(service.isSolvable(5, 7, 3)).toBeTrue();
  });

  it('should return false for unsolvable scenarios', () => {
    expect(service.isSolvable(2, 3, 4)).toBeFalse();
    expect(service.isSolvable(4, 6, 7)).toBeFalse();
  });

  it('should handle edge cases', () => {
    expect(service.isSolvable(0, 0, 0)).toBeTrue();
    expect(service.isSolvable(0, 5, 2)).toBeFalse();
    expect(service.isSolvable(5, 0, 2)).toBeFalse();
    expect(service.isSolvable(3, 5, 1)).toBeFalse();
  });
});
