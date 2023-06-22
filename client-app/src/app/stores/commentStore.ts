import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { makeAutoObservable } from "mobx";
import { ChatComment } from "../models/comment";
import { store } from "./store";

export default class CommentStore {
		comments: ChatComment[] = [];
		hubConnection: HubConnection | null = null;

		constructor() {
				makeAutoObservable(this);
		}

		createHubConnection = (activityId: string) => {
				if (store.activityStore.selectedActivity) {
						this.hubConnection = new HubConnectionBuilder()
								.withUrl('http://localhost:5000/chat?activityId=' + activityId, {
										accessTokenFactory: () => store.userStore.user?.token!
								})
								.withAutomaticReconnect()
								.configureLogging(LogLevel.Information)
								.build();
				}
		}
}