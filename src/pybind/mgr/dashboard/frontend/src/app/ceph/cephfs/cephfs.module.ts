import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TreeModule } from '@circlon/angular-tree-component';
import {
  NgbDatepickerModule,
  NgbNavModule,
  NgbTimepickerModule,
  NgbTooltipModule,
  NgbTypeaheadModule
} from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from '~/app/app-routing.module';
import { SharedModule } from '~/app/shared/shared.module';
import { CephfsChartComponent } from './cephfs-chart/cephfs-chart.component';
import { CephfsClientsComponent } from './cephfs-clients/cephfs-clients.component';
import { CephfsDetailComponent } from './cephfs-detail/cephfs-detail.component';
import { CephfsDirectoriesComponent } from './cephfs-directories/cephfs-directories.component';
import { CephfsVolumeFormComponent } from './cephfs-form/cephfs-form.component';
import { CephfsListComponent } from './cephfs-list/cephfs-list.component';
import { CephfsTabsComponent } from './cephfs-tabs/cephfs-tabs.component';
import { CephfsSubvolumeListComponent } from './cephfs-subvolume-list/cephfs-subvolume-list.component';
import { CephfsSubvolumeFormComponent } from './cephfs-subvolume-form/cephfs-subvolume-form.component';
import { CephfsSubvolumeGroupComponent } from './cephfs-subvolume-group/cephfs-subvolume-group.component';
import { CephfsSubvolumegroupFormComponent } from './cephfs-subvolumegroup-form/cephfs-subvolumegroup-form.component';
import { CephfsSubvolumeSnapshotsListComponent } from './cephfs-subvolume-snapshots-list/cephfs-subvolume-snapshots-list.component';
import { CephfsSnapshotscheduleListComponent } from './cephfs-snapshotschedule-list/cephfs-snapshotschedule-list.component';
import { DataTableModule } from '../../shared/datatable/datatable.module';
import { CephfsSubvolumeSnapshotsFormComponent } from './cephfs-subvolume-snapshots-list/cephfs-subvolume-snapshots-form/cephfs-subvolume-snapshots-form.component';
import { CephfsSnapshotscheduleFormComponent } from './cephfs-snapshotschedule-form/cephfs-snapshotschedule-form.component';
import { CephfsMountDetailsComponent } from './cephfs-mount-details/cephfs-mount-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    NgChartsModule,
    TreeModule,
    NgbNavModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    NgbTooltipModule,
    DataTableModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbTypeaheadModule
  ],
  declarations: [
    CephfsDetailComponent,
    CephfsClientsComponent,
    CephfsChartComponent,
    CephfsListComponent,
    CephfsTabsComponent,
    CephfsVolumeFormComponent,
    CephfsDirectoriesComponent,
    CephfsSubvolumeListComponent,
    CephfsSubvolumeFormComponent,
    CephfsDirectoriesComponent,
    CephfsSubvolumeGroupComponent,
    CephfsSubvolumegroupFormComponent,
    CephfsSubvolumeSnapshotsListComponent,
    CephfsSnapshotscheduleListComponent,
    CephfsSnapshotscheduleFormComponent,
    CephfsSubvolumeSnapshotsFormComponent,
    CephfsMountDetailsComponent
  ]
})
export class CephfsModule {}
