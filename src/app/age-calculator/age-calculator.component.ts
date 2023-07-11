import { Component } from '@angular/core';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css']
})
export class AgeCalculatorComponent {
  birthdate!: string;
  age!: string;
  zodiacSign!: string;
  zodiacSignImage!: string;




  calculateAge(): void {
    const birthdate = new Date(this.birthdate);
    const today = new Date();

    const yearDiff = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();

    let years = yearDiff;
    let months = monthDiff;
    let days = dayDiff;

    if (dayDiff < 0) {
      const previousMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      const daysInPreviousMonth = new Date(previousMonth.getFullYear(), previousMonth.getMonth() + 1, 0).getDate();
      days = daysInPreviousMonth + dayDiff;
      months--;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    this.age = `${years} years, ${months} months, ${days} days`;

    this.calculateZodiacSign(birthdate.getMonth() + 1, birthdate.getDate());
  }





  calculateZodiacSign(month: number, day: number): void {
    const signs = [
      { sign: 'Aries', image: 'assets/aries-zodiac.jpg', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 },
      { sign: 'Taurus', image: 'assets/zodiac-sign-taurus.webp', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 },
      { sign: 'Gemini', image: 'assets/gemini-star.png', startMonth: 5, startDay: 21, endMonth: 6, endDay: 20 },
      { sign: 'Cancer', image: 'assets/zodiac-sign-cancer.webp', startMonth: 6, startDay: 21, endMonth: 7, endDay: 22 },
      { sign: 'Leo', image: 'assets/zodiac-signs-leo.webp', startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },
      { sign: 'Virgo', image: 'assets/zodiac-signs-virgo.webp', startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },
      { sign: 'Libra', image: 'assets/zodiac-sign-libra.webp', startMonth: 9, startDay: 23, endMonth: 10, endDay: 22 },
      { sign: 'Scorpio', image: 'assets/scorpio.jpg', startMonth: 10, startDay: 23, endMonth: 11, endDay: 21 },
      { sign: 'Sagittarius', image: 'assets/zodiac-sign-sagittarius.webp', startMonth: 11, startDay: 22, endMonth: 12, endDay: 21 },
      { sign: 'Capricorn', image: 'assets/zodiac-signs-capricorn.jpg', startMonth: 12, startDay: 22, endMonth: 1, endDay: 19 },
      { sign: 'Aquarius', image: 'assets/aquarius-zodiac.jpg', startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 },
      { sign: 'Pisces', image: 'assets/pisces.webp', startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 }
    ];

    for (const sign of signs) {
      if (
        (month === sign.startMonth && day >= sign.startDay) ||
        (month === sign.endMonth && day <= sign.endDay)
      ) {
        this.zodiacSign = sign.sign;
        this.zodiacSignImage = sign.image;
        break;
      }
    }
  }

}
