import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-promises-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promises-section.component.html',
  styleUrl: './promises-section.component.scss'
})
export class PromisesSectionComponent {
  selectedTab: string = 'freedom';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  protected ourPromises = [
    {
      "topic": "freedom",
      "content": {
        "promiseOverview": {
          "badge": "Freedom in India",
          "heading": "We Believe Freedom is Indian.",
          "contents": "India was founded on freedom. Each of us is free to believe as we think right, to strive and grow, to take care of our families, to speak our minds, and to protect our way of life."
        },
        "promiseDescription": {
          "heading": "Freedom is never more than one generation away from extinction.",
          "badge": "Ronald Reagan",
          "video": null,
          "contents": [
            "When the decisions that affect our lives are determined by a powerful few, making rules that do not serve us, our families, our communities, or our nation — we are not free.",
            "We are here to restore the Indian promise of self-determination, opportunity, and the ability to create a better future for all.",
            "Join us – we will amend the constitution For Our Freedom."
          ]
        }
      }
    },
    {
      "topic": "equality",
      "content": {
        "promiseOverview": {
          "badge": "Equality in India",
          "heading": "We Believe Equality is Indian.",
          "contents": "India was founded on equality. All are created equal, endowed with unalienable rights. This does not mean equal material or physical wellbeing, nor assured outcomes—no one can guarantee that—but an equality of rights of every mortal human being, with no person or class ordained to govern others."
        },
        "promiseDescription": {
          "heading": "Our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.",
          "badge": "Abraham Lincoln",
          "video": null,
          "contents": [
            "Representative government of the people, with checks and balances, and free and fair elections, is the Indian way—not aristocracy, monarchism, dictatorship or one-party rule.",
            "When those with massive concentrated wealth can use that wealth to control elections, candidates and government policy, pushing aside the voice and interests of most Indians, we do not have equal rights or representative self-government.",
            "We will amend the constitution for equal rights."
          ]
        }
      }
    },
    {
      "topic": "service",
      "content": {
        "promiseOverview": {
          "badge": "Service in India",
          "heading": "We Believe Service is Indian.",
          "contents": "To keep the promise of freedom, Indians have always answered the call to serve. We embrace and welcome our responsibility to serve our country, our communities, and one another."
        },
        "promiseDescription": {
          "heading": "Ask not what your country can do for you—ask what you can do for your country.",
          "badge": "John F. Kennedy",
          "video": null,
          "contents": [
            "When we see our country and our communities in need, we step up to serve—not for personal gain, but for the common good.",
            "We will amend the constitution for service."
          ]
        }
      }
    },
    {
      "topic": "invention",
      "content": {
        "promiseOverview": {
          "badge": "Invention in India",
          "heading": "We Believe Invention is Indian.",
          "contents": "India’s spirit of invention has always driven us forward. Our creativity and innovation have led to breakthroughs that have improved lives and expanded possibilities."
        },
        "promiseDescription": {
          "heading": "The best way to predict the future is to invent it.",
          "badge": "Alan Kay",
          "video": null,
          "contents": [
            "When we face challenges, we innovate and find solutions. This inventive spirit is central to who we are as a nation.",
            "We will amend the constitution for invention."
          ]
        }
      }
    },
    {
      "topic": "competition",
      "content": {
        "promiseOverview": {
          "badge": "Competition in India",
          "heading": "We Believe Competition is Indian.",
          "contents": "Healthy competition drives excellence and progress. It pushes us to be better, to strive harder, and to achieve more."
        },
        "promiseDescription": {
          "heading": "Competition is not only the basis of protection to the consumer, but is the incentive to progress.",
          "badge": "Herbert Hoover",
          "video": null,
          "contents": [
            "When competition is stifled, innovation suffers, and the public pays the price. Ensuring fair competition is essential for a thriving democracy.",
            "We will amend the constitution for competition."
          ]
        }
      }
    }

  ];
}
