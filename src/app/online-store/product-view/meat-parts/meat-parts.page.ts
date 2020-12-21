import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-meat-parts',
  templateUrl: './meat-parts.page.html',
  styleUrls: ['./meat-parts.page.scss'],
})
export class MeatPartsPage implements OnInit {

  partName: string;
  labels: Map<string, string>;
  menuIsOpen = false;

  constructor(private route: ActivatedRoute, public navCtr: NavController, private dataService: DataService) { }

  ngOnInit() {
    if (this.route.snapshot.data.special) {
      switch (this.route.snapshot.data.special) {
        case 1:
          this.partName = 'Rind';
          this.labels = new Map([['Englischer', '#97cb78'], ['Knöpfel-Gustostücke', '#bd72c1'], ['Vorderviertel-Gustostücke', '#efc48b'],
            ['Hinteres', '#2b6b45'], ['Vorderes', '#5692cc'], ['Gulaschfleisch', '#f48d71']]);
          break;
        case 2:
          this.partName = 'Kalb';
          this.labels = new Map([['Rücken', '#969'], ['Schlögel', '#ffd28a'], ['Schulter', '#2aad3c'],
            ['Hals', '#679ad6'], ['Brust', '#f48d71']]);
          break;
        case 3:
          this.partName = 'Schwein';
          this.labels = new Map([['Karree', '#969'], ['Schlögel', '#ffd28a'], ['Schulter', '#2aad3c'], ['Bauch', '#f48d71']]);
          break;
      }
    } else {
      this.navigateToOnlineStore();
    }
  }

  async navigateToOnlineStore() {
    await this.navCtr.navigateBack('online-store');
  }

  async chooseMeatPart(id: number, name: string) {
    this.dataService.setData('articlesTitle', name);
    await this.navCtr.navigateForward('online-store/product-view/3/articles/' + id);
  }

  labelingMenuCloses(): void {
    this.menuIsOpen = false;
  }
  labelingMenuOpens(): void {
    this.menuIsOpen = true;
  }

}
