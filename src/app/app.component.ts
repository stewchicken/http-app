import { Component, HostListener, ElementRef, Renderer, ViewContainerRef, OnDestroy } from '@angular/core';
import { User } from "app/user/user";
import 'rxjs/add/operator/merge';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AuthService } from "app/auth.service";
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { TranslateService } from "ng2-translate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  currentTime: Date = new Date();
  public currentUser: User;
  public subscription: Subscription;
  private globalClickCallbackFn: Function;
  constructor(
    public elementRef: ElementRef,
    public renderer: Renderer,
    public router: Router,
    public translate: TranslateService,
    public activatedRoute: ActivatedRoute,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef,
    private authenticationService: AuthService,

  ) {
    window.setInterval(
      () => {
        this.currentTime = new Date();
      }, 1000
    );
  }

  ngOnInit() {
    this.globalClickCallbackFn = this.renderer.listen(this.elementRef.nativeElement, 'click', (event: any) => {
      console.log("Global Click Event Listener >" + event);
    });
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.subscription = this.authenticationService.currentUser.subscribe(
      data => {
        this.currentUser = data;
        console.log("app component ngOnInit :" + this.currentUser.username);
        let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
        let routerState: RouterState = this.router.routerState;
        let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

        console.log("activedRouteSNapshot: " + activatedRouteSnapshot);
        console.log("routerState: " + routerState);
        console.log("routerStateSnapshot " + routerStateSnapshot);

        //如果是从/login这个URL进行的登录，跳转到首页，否则什么都不做
        if (routerStateSnapshot.url.indexOf("/login") != -1) {
          this.router.navigateByUrl("/");
        }
      },
      error => console.error(error)
    );

    this.translate.addLangs(["zh", "en"]);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    console.log("check browser language>" + browserLang);
    this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'en');
  }

  changeLang(lang) :void {
    console.log("changeLang: "+lang);
    this.translate.use(lang);
  }

  doLogout(): void {
    this.authenticationService.logout();
  }
}
