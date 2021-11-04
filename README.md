# Kanban Fragment for Liferay Objects

## Talk for Dev/24 - [link to presentation](https://youtu.be/PSxgzOfDe1Y?t=38818)
### [Link to Slides](https://docs.google.com/presentation/d/1hMpv10iZphf0h6STao6ODHY1w51lTNivxs61GJbLW5c)

Liferay continues to invest in features that make low-code development possible. Using Liferay Objects, Collections, Forms, and Fragments, teams can quickly make fully functional systems that are more powerful and require less customization than ever before!

Since App Builder is deprecated (and fully removed) within the 7.4 release, Liferay Objects is intended to fill that gap. Through the use of this slick new feature, we will be investigating what we can do in the low-code to deliver both powerful functionality and the great user experience that you would expect from Liferay’s modern UI experience.

In this session, we will build a functional application that demonstrates Liferay’s ability to deliver value quickly and overcome the historical need to spend days of development creating service builder entities, CRUD UIs, integration with Liferay’s asset frameworks, and creating custom rest endpoints. Liferay Objects are automatically integrated with other Liferay Frameworks like Workflow, Permissions, Asset so that they can be immediately used alongside any out-of-the-box capabilities. It seems unbelievable to many! The great news is that it is not only possible in 7.4, but you can do it too!

*Let’s build great things together!!*

## Initial Presentation

https://liferay.slack.com/files/U0176BBM8TE/F02JHSKQERF/liferay-74-initialthoughts.mp4

# Setup

## Liferay Object

1. Task Object needs a picklist, "Task Status"

| Field       | Key         |
| :---        | :---        |
| todo        | todo        |
| inprogress  | inprogress  |
| done        | done        |

2. Create Task Object

3. Object Needs the Fields

| Field             | Type            | Required  |
| :---              |      :----:     |  :----:   |
| Task Title        | String          | Yes       |
| Task Description  | String          | No        |
| Task Status       | Picklist        | Yes       |
| Progress          | Progress        | No        |

## Build fragment bundle

npm run compress

Import into site fragments

## Page Setup

* Using Collections Displays and Collection Providers create 3 columns and filter on the status and "todo", "inprogress", "done".
* Add the Kanban Fragement to the Collection Display
* Map the fields to the Title, Description, and Progress of the object within the Collection Display

## Load enough content so that each column has a todo. 

## Contribute. Would love to hear comments and suggestions to make it better or provide more options!
