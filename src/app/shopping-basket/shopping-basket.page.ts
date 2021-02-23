import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../global.service';
// @ts-ignore
import {AlertController, ModalController, NavController} from '@ionic/angular';
import {OrderPage} from './order/order.page';
import {DetailedArticlePage} from '../online-store/product-view/detailed-article/detailed-article.page';

@Component({
    selector: 'app-shopping-basket',
    templateUrl: './shopping-basket.page.html',
    styleUrls: ['./shopping-basket.page.scss'],
})
export class ShoppingBasketPage {
    public results;

    constructor(private alertController: AlertController, private navCtr: NavController, private modalController: ModalController, public globalService: GlobalService, public http: HttpClient) {
    }

    async openModal(i) {
        const modal = await this.modalController.create({
            component: DetailedArticlePage,
            componentProps: {
                item: i
            }
        });
        /*
        const modal = await this.modalController.create({
            component: EditArticlePage,
            componentProps: {
                item: i
            }
        });
         */
        modal.present();
        modal.onWillDismiss().then(() => {
            this.ionViewWillEnter();
        });
    }

    async openOrderModal() {
        const modal = await this.modalController.create({
            component: OrderPage,
        });
        return await modal.present();
    }

    ionViewWillEnter() {
        if (this.globalService.getToken() != null) {
            // tslint:disable-next-line:max-line-length
            this.http.get(`https://speckalm.htl-perg.ac.at/r/api/users/${this.globalService.getId()}/shoppingCart?token=${this.globalService.getToken()}`).subscribe((o: any) => {
                this.results = o.products;
            });
        } else {
            console.log('token null');
        }
    }

    deleteArticle(id) {
        // tslint:disable-next-line:max-line-length
        const cache = `https://speckalm.htl-perg.ac.at/r/api/users/${this.globalService.getId()}/shoppingCart/${id}?token=${this.globalService.getToken()}`;
        this.http.delete(cache).subscribe(() => {
            this.ionViewWillEnter();
        }, error => {
            this.createAlert('Fehler beim Entfernen', error);
        });
    }

    async createAlert(header: string, message: string) {
        const alert = await this.alertController.create({
            header,
            message
        });
        await alert.present();
        await alert.onDidDismiss();
    }

    expandItem(item): void {
        if (item.expanded) {
            item.expanded = false;
        } else {
            this.results.map(listItem => {
                if (item === listItem) {
                    listItem.expanded = !listItem.expanded;
                } else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    }

    toOnlineStore() {
      this.navCtr.navigateForward('/online-store');
    }
}
