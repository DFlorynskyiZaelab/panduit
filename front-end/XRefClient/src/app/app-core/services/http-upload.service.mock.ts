import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class HttpUploadMockService {
    fetchData(): Observable<any> {
        const mockData = [
            { prop1: Math.random(), prop2: this.getRandomText(), prop3: this.getRandomText(), prop4: this.getRandomText(), prop5: 'prop_15', prop6: 'prop_16' },
            { prop1: Math.random(), prop2: this.getRandomText(), prop3: this.getRandomText(), prop4: this.getRandomText(), prop5: 'prop_25', prop6: 'prop_26' },
            { prop1: Math.random(), prop2: this.getRandomText(), prop3: this.getRandomText(), prop4: this.getRandomText(), prop5: 'prop_35', prop6: 'prop_36' },
            { prop1: Math.random(), prop2: this.getRandomText(), prop3: this.getRandomText(), prop4: this.getRandomText(), prop5: 'prop_15', prop6: 'prop_16' },
            { prop1: Math.random(), prop2: this.getRandomText(), prop3: this.getRandomText(), prop4: this.getRandomText(), prop5: 'prop_25', prop6: 'prop_26' },
            { prop1: Math.random(), prop2: this.getRandomText(), prop3: this.getRandomText(), prop4: this.getRandomText(), prop5: 'prop_35', prop6: 'prop_36' },
            { prop1: Math.random(), prop2: this.getRandomText(), prop3: this.getRandomText(), prop4: this.getRandomText(), prop5: 'prop_15', prop6: 'prop_16' },
            { prop1: Math.random(), prop2: this.getRandomText(), prop3: this.getRandomText(), prop4: this.getRandomText(), prop5: 'prop_25', prop6: 'prop_26' },
            { prop1: Math.random(), prop2: this.getRandomText(), prop3: this.getRandomText(), prop4: this.getRandomText(), prop5: 'prop_35', prop6: 'prop_36' },
        ];

        return of(mockData)
            .pipe(delay(500));
    }

    getRandomWord() {
        const words = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua"];
        return words[Math.floor(Math.random() * words.length)];
    }

    getRandomSentence(wordCount: any) {
        let sentence = "";
        for (let i = 0; i < wordCount; i++) {
            sentence += this.getRandomWord() + " ";
        }
        sentence = sentence.trim() + ".";
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }

    getRandomText() {
        let text = "";
        let sentenceCount;
        let ccc = Math.floor(Math.random() * 3) + 1;

        switch (ccc) {
            case 1:
                sentenceCount = Math.floor(Math.random() * 3) + 1; // 1 to 3 sentences
                break;
            case 2:
                sentenceCount = Math.floor(Math.random() * 5) + 1; // 3 to 7 sentences
                break;
            case 3:
                sentenceCount = Math.floor(Math.random() * 10) + 1; // 8 to 17 sentences
                break;
            default:
                sentenceCount = 1;
                break;
        }

        for (let i = 0; i < sentenceCount; i++) {
            text += this.getRandomSentence(Math.floor(Math.random() * 12) + 3) + " "; // 3 to 14 words per sentence
        }

        return text.trim();
    }

}